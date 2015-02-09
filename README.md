# djng-boilerplate
Django Angular Boilerplate

## Installation

*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/),
and [Node.js](http://nodejs.org/).*

* Fork this repository.
* Clone repository `$ git clone git@github.com:<your username>/djng-boilerplate.git`
* Create virtualenv `$ virtualenv djng_venv`
* Activate virtualenv `$ source djng_venv/bin/activate`
* cd to project root `$ cd djng-boilerplate/`
* Install pip requirements `$ pip install -r requirements.txt`
* (Optional) Add "./node_modules/.bin/" to $PATH so you can run local packages from project root
* (Optional) Install bower globally `$ npm install -g bower`
* Install node_modules `$ npm install`
* Install bower modules `$ bower install` or `$ ./node_modules/.bin/bower install`
* Configure `djng_boilerplate/settings.py` file and run `$ python manage.py migrate`
* Run development server `$ python manage.py runserver`