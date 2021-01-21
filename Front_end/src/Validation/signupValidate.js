export const signupValidate = (values) =>{
    let errors = {};

    if(!values.firstName.trim()){
        errors.firstName = 'First name required'
    }

    if(!values.lastName.trim()){
        errors.lastName='Last name required'
    }

    if(!values.email){
        errors.email='Email required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email='Invalid email'
    }

    if(!values.password){
        errors.password = 'Password required'
    } else if (values.password.length < 6) {
        errors.password = 'Password must be min. 6 characters'
    }

    if(!values.confirmPassword){
        errors.confirmPassword = 'Password required'
    } else if (values.password !== values.confirmPassword){
        errors.confirmPassword = 'Password confirmation do not match password'
    }

}