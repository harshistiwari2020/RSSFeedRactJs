from flask import Blueprint, jsonify, request, Flask
import random
import json
import feedparser


app = Flask(__name__)


@app.route('/get_feeds', methods=["Post", "Get"])
def get_name():
    """
    Return Feed as Json, fetched from the provided rss url link.
    """
    print(request.data) 
    name_json  = request.get_json()
    rss_url = name_json["url"] # Extract the URL
    print(rss_url)
    rss_result = feedparser.parse(rss_url) # Fetch the results

    return json.dumps(rss_result.entries) # Retur Json

if __name__ == '__main__':
    app.run(debug=True)