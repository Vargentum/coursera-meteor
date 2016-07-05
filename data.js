import {Mongo} from 'meteor/mongo'
export const Images = new Mongo.Collection('images')

const addImagesFrom = (path) =>
  _.range(1,10).forEach(
    (n) => Images.insert({
      src: `${path}${n}.png`,
      alt: `description for image ${n}`
    })
  )

if (Meteor.isServer) {
  console.log(Images.find().count())

  Meteor.startup(() => {
    if (Images.find().count() === 0) {
      addImagesFrom('m/')
      addImagesFrom('w/')
    }
  })
}