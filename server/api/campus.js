const router = require('express').Router()
const { Campus } = require('../db')

router.get('/', async (req, res, next) => {
  try{
  const campuses = await Campus.findAll()
  console.log({campuses})
  res.json(campuses)
}catch(err){
  console.log('=-------------error')
  console.log(error)
  next(err);
}
})

router.get('/:id', async (req, res, next) => {
  try{
  const campus = await Campus.findById(req.params.id)
  res.json(campus)
}catch(err){
  next(err);
}
})

// router.get('/api/campuses/numberOfStudents', async (req, res, next) => {
//   try{


module.exports = router;

