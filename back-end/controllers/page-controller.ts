
//Renders the terms and conditions
exports.getTermsAndConditionsPage = (req,res)=>{
    res.render('terms-and-conditions')
}

//Renders the privacy policy
exports.getPrivacyPolicy = ()=>{
    res.render('privacy-policy')
}
