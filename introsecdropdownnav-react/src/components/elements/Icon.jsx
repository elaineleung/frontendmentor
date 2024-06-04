function Icon ({ icon }) {
  return (
    <svg viewBox={icon.viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d={icon.d} fill={icon.fill}/>
    </svg>
  );
};

export default Icon