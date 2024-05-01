import Icon from "./Icon";

function SubNav({ items, title }) {
  const itemsList = items.map((item) => {
    return (
      <li key={item.name}>
        <a className="subnav__item" href="#">
          {item.icon && (
            <div className="subnav__item-icon">
              <div className={`${item.icon.class}`}>
                <Icon icon={item.icon} />
              </div>
            </div>
          )}
          <span className="subnav__item-name">{item.name}</span>
        </a>
      </li>
    );
  });

  return (
    <div className={`subnav__items ${title.toLowerCase()}`}>
      <ul>{itemsList}</ul>
    </div>
  );
}

export default SubNav;
