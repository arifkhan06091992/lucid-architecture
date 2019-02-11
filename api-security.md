# Laravel / PHP API Security Issues & Pointers

## Issues

##### 1. Man In The Middle Attack
A man in the middle (MITM) attack involves an attacker secretly relaying, intercepting or altering communications, including API messages, between two parties to obtain sensitive information.

For example, a perpetrator can act as a man in the middle between an API issuing a session token in an HTTP header and a user’s browser. Intercepting that session token would grant access to the user’s account, which might include personal details, such as credit card information and login credentials.

* Solution
	* Use SSL or TLS
	* Encryption and decryption certificates
    * API Security Using nonce

* Laravel Solution
	* Use JWT Token for auth with valid certificates
	* https://github.com/kbs1/laravel-encrypted-api
    * [API Security Using nonce](https://github.com/delatbabel/apisecurity)

##### 2. DISTRIBUTED DENIAL OF SERVICE (DDOS)
A massive amount of API requests to a commenting system. This consumed available machine resources and crowded out human commenters, eventually causing the website to crash.

* Solution
	* API Rate limiting
    *


## Pointers

##### 1. API Documentation
* [API Doc with Postman](https://github.com/mpociot/laravel-apidoc-generator)
