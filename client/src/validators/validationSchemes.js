import * as yup from 'yup';

export default {
    LoginSchema: yup.object().shape({
        email: yup.string().email('check email').required('Email is required'),
        password: yup.string().test('test-password','min 6 symbols',value => (value && value.trim().length>=6)).required('Password is required')
    }),
    RegistrationSchema: yup.object().shape({
        email: yup.string().email('Check email, please').required('Email is required'),
        password: yup.string().test('test-password','min 6 symbols',value => (value && value.trim().length>=6)).required('Password is required'),
        firstName: yup.string().test('test-firstName','required',value => (value && value.trim().length>=1)).required('First Name is required'),
        lastName: yup.string().test('test-lastName','required',value => (value && value.trim().length>=1)).required('Last Name is required')
    }),
    ProductSchema: yup.object().shape({
        productName: yup.string().test('test-productName','required',value => (value && value.trim().length>=1)).required('Name field is required'),
        weight: yup.number().min(1,'min weight is 1').required('Weight field is required'),
        color: yup.string().test('test-color','required',value => (value && value.trim().length>=1)).required('Color field is required'),
        price: yup.number().min(0.1,'min price is 0.1').required('Price field is required'),
        productType: yup.string().matches(/(phone|tablet|notebook)/).required('Product type is required'),
        dualSim: yup.boolean().oneOf([true, false],'Need to select type of sim card'),
        videoCard: yup.string().test('test-videoCard', value => (value && value.trim().length>=1)).required('Video card type is required')
    })
}
