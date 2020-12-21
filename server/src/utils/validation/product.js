const yup = require('yup');

module.exports.productSchema = yup.object().shape({
    productName: yup.string().required().min(1),
    productType: yup.string().required().min(1),
    weight: yup.number().required().positive().integer(),
    color: yup.string().required().min(1),
    price: yup.number().required().positive(),
    dualSim: yup.bool(),
    videoCard: yup.string().min(1)
});