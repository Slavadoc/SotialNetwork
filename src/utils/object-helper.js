
export const  updateObjectInArray = (items, itemsId, objPropName , newObjectProps ) => {
  return items.users.map( u => {
      if( u[objPropName] === itemsId) {
        return { ...u, ...newObjectProps }
      }
      return u;
    }
  )
}
