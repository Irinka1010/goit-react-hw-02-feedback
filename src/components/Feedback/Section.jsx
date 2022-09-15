import PropTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <div className="">
      <h2 className="">{title}</h2>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
