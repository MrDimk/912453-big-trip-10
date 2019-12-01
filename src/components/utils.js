const renderElement = (container, layout, position = `beforeend`) => {
  container.insertAdjacentHTML(position, layout);
};

export {renderElement};
