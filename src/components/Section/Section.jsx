const Section = ({ titleText, title, children }) => {
  const Title = title;
  return (
    <section>
      <Title>{titleText}</Title>
      {children}
    </section>
  );
};

export default Section
