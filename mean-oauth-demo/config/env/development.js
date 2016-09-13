'use strict';

module.exports = {
	db: 'mongodb://localhost:27017/mean-dev',
	app: {
		title: 'MEAN OAuth2'
	},
    meetup: {
        clientKey: process.env.MEETUP_KEY || 'APP_ID',
        clientSecret: process.env.MEETUP_SECRET || 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/meetup/callback'
    },	
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '966230620986-ik0nj5m07qve7rmu5rgaog7ev1mqdt2l.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'CqmMzm3TGgk2dUlMavGfXsuK',
		callbackURL: 'http://erp-foizloqa.cloudapp.net:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};