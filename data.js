import {Mongo} from 'meteor/mongo'

export const Images = new Mongo.Collection('images')

if (Meteor.isServer) {
  console.log(Images.find().count())

  Meteor.startup(() => {
    if (Images.find().count() === 0) {
      Images.insert({
        src: 'icon-dark.jpg',
        alt: 'image with dark background'
      })
      Images.insert({
        src: 'icon-white.jpg',
        alt: 'image with white background'
      })
    }
  })
}