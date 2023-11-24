import { useState } from 'react';
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!(presupuesto) || presupuesto < 0) {
      setMensaje('No es un presupuesto válido');
      return;
    }
    setMensaje('');
    setIsValidPresupuesto(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Validar que solo se ingresen números decimales
    const regex = /^(\d*\.)?\d*$/;
    if (!regex.test(value)) {
      return; // No hacer nada si hay caracteres no permitidos
    }

    // Si el valor es una cadena vacía, establecerlo como 0
    setPresupuesto(value === '' ? 0 : Number(value));
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            value={presupuesto === 0 ? '' : presupuesto}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
