const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  //Initialize variable to hold total keys, starts at 0
  let total = 0;
  _.forIn(obj, (key) => {
    total += 1
  })
  
  //returns total keys
  return total 
}
//----------------------
//If wanted in a more concise way, the code below provides.

//keys() creates an array of the own enumerable property names of object
//return _.keys(obj).length

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  //.sum() computes the sum of the values in the array
  //.compact() removes falsy values from the input 'array'
return _.sum(_.compact(array));
};

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  //_.fromPairs returns an object composed from key value pairs (a: 1, b: 2).
  return _.fromPairs(member)
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */

function groupClassByInstructor(collection) {
//It creates an object where keys represent the groups, and the values are arrays containing the elements that belong to each group."(collection, iteratee"
//collection = the collection to iterate over, which can be an array, object, or another iterable
//iteratee a function that determines how elements are grouped. It can be a string (property name) or function that returns the group key.
  return _.groupBy(collection, "instructor"); 
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
  // Not coded into the testing 
}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) { 
// ✓ it returns the number of keys in an object
//✕ it returns the string 'There is no instructor by that name.' if the instructor is not found (1 ms)
 
 // Use _.filter to create an array containing only the class objects with the specified instructor
 const filteredClasses = _.filter(collection, {instructor});
  
    if (filteredClasses.length === 0) {
      return 'There is no instructor by that name.';
    } else {
      return filteredClasses.length;
    }
  }
  

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */

function removeInactiveMembers(collection) {

  return _.filter(collection, { currentMember: true });
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
return _.uniqBy(collection, 'title').map(yoga => _.pick(yoga, ['title', 'priceInCents']))
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
