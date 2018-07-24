var data = require('../data/data');

exports.gethotels = function (req, res, next) {

    return res.status(200).json({
      hotels: data
  });

};

exports.gethotel = function (req, res, next) {

  for(let i = 0; i < data.length; i++){
      if(data[i].id === req.params.id){

          return res.status(200).json({
              hotel: data[i]
          });
      }
  }

  return res.status(500).json({
    response: 'No se ha encontrado el hotel especificado'
  });

};

exports.gethotelforstars = function (req, res, next) {

    var hotels = [];

    for(let i = 0; i < data.length; i++){
        if(data[i].stars == req.params.starsId){
            hotels.push(data[i]);
        }
    }
    if(!hotels.length){
        return res.status(500).json({
            response: 'No se han encontrado hoteles con las estrellas de su preferencia'
        });
    }else{
        return res.status(200).json({
            data: hotels
        });
    }




};

exports.createhotel = function (req, res, next) {
  data.push({
      id : req.body.id,
      name: req.body.name,
      stars: req.body.stars,
      price: req.body.price,
      image: req.body.image,
      amenities: req.body.amenities
  });

  return res.status(200).json({
     data: data
    });
};

exports.updatehotel = function (req, res, next) {
 let indice = data.map(function (element) {
     return element.id;
 }).indexOf(req.params.id);

    data[indice].id = req.body.id;
    data[indice].name = req.body.name;
    data[indice].stars = req.body.stars;
    data[indice].price = req.body.price;
    data[indice].image = req.body.image;
    data[indice].amenities = req.body.amenities;

  res.status(200).json({
      data: data
  });

};

exports.deletehotel = function (req, res, next) {
  let indice = data.map(function (element) {
        return element.id;
    }).indexOf(req.params.id);

  data.splice(indice, 1);

    res.status(200).json({
        data: data
    });

};