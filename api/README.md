## Simple Flask app to fetch RSS feeds.
    
> How to run the api.
>> 1) create a new env with 
>> ```shell
>>        virtualenv env

>> 2) Install requirements with: 
>> ```shell
>>      pip install -r requirement.txt
> ### YAY
>> 3) Run your app
>> ```python
>>      python app.py

## Test the API:

I have already deployed this api on heroku `https://apirssignite.herokuapp.com/get_feeds` (or you can use your localhost to run it into your system) and add  body as 
```
{
    "url": "https://wwww.examplerss.com/rss.xml"
}