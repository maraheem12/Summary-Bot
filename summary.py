import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

def generate_summary(paragraph, compression_ratio=0.4):
    # Tokenize the paragraph into sentences
    sentences = sent_tokenize(paragraph)

    # Tokenize the sentences into words and perform lemmatization
    lemmatizer = WordNetLemmatizer()
    words = []
    for sentence in sentences:
        words.extend([lemmatizer.lemmatize(word.lower()) for word in word_tokenize(sentence) if word.isalnum()])

    # Filter out stopwords
    stop_words = set(stopwords.words('english'))
    words = [word for word in words if word not in stop_words]

    # Calculate TF-IDF scores
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform([paragraph])
    feature_names = tfidf_vectorizer.get_feature_names_out()
    word_scores = dict(zip(feature_names, tfidf_matrix.toarray()[0]))

    # Calculate sentence scores based on TF-IDF scores of words
    sentence_scores = {}
    for sentence in sentences:
        score = 0
        for word in word_tokenize(sentence.lower()):
            if word in word_scores:
                score += word_scores[word]
        sentence_scores[sentence] = score

    # Get top sentences to meet the compression ratio
    total_sentences = len(sentences)
    num_sentences = max(int(total_sentences * compression_ratio), 1)
    top_sentences = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:num_sentences]

    # Return the summary
    summary = ' '.join(top_sentences)
    return summary