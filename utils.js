export const render = (id, data) => {
  const element = document.getElementById(id);
  element.innerHTML = '';
  element.appendChild(new JSONFormatter(data).render());
};