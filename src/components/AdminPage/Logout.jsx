import React from 'react'

const Logout = () => {
  return (

    <div
      className="flex items-center justify-between p-4 text-green-700 border rounded gap-4 border-green-900/10 bg-green-50"
      role="alert"
    >
    
    
    <div
      className="flex items-center justify-between p-4 border rounded gap-4 text-amber-700 border-amber-900/10 bg-amber-50"
      role="alert"
    >
      <div className="flex items-center gap-4">
        <span className="p-2 text-white rounded-full bg-amber-600">
         
        </span>
    
        <p>
          <strong className="text-sm font-medium"> ¿Cerrar sesión? </strong>
    
          <span className="block text-xs opacity-90">
            Confirma cierre de sesión
          </span>
        </p>
      </div>
    
      <button className="opacity-90" type="button">
        <span className="sr-only"> Close </span>
    
        
      </button>
    </div>
 
    
    </div>
  )
}

export default Logout