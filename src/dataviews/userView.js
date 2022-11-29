function userView(user) {
    
    return {
      id: user.user_id,
      firstname: user.user_firstname,
      lastname: user.user_lastname,
      email: user.user_email,
      password: user.user_password,
      createdAt: user.user_created_at,
      updatedAt: user.user_updated_at,
  
    };
  }
  
    
    module.exports = { 
      userView,
    };