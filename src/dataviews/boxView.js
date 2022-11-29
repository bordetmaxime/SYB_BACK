function boxView(box) {
    
    return {
      id: box.box_id,
      title: box.box_title,
      description: box.box_description,
      category: box.box_category,
      user_id: box.box_user_id,
      createdAt: box.box_created_at,
      updatedAt: box.box_updated_at,
  
    };
  }

  function boxsView(boxs) {
    return boxs.map((box) => (box));
  }
  
    
    module.exports = { 
      boxView,
      boxsView
    };