import { node } from '../../utility/node';

import './index.css';

const icon = {};

icon.all = {
  add: {
    name: 'add',
    path: 'M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z'
  },
  arrowBack: {
    name: 'arrow-back',
    path: 'M20.016 11.016v1.969h-12.188l5.578 5.625-1.406 1.406-8.016-8.016 8.016-8.016 1.406 1.406-5.578 5.625h12.188z'
  },
  arrowDownward: {
    name: 'arrow-downward',
    path: 'M20.016 12l-8.016 8.016-8.016-8.016 1.453-1.406 5.578 5.578v-12.188h1.969v12.188l5.625-5.578z'
  },
  arrowForward: {
    name: 'arrow-forward',
    path: 'M12 3.984l8.016 8.016-8.016 8.016-1.406-1.406 5.578-5.625h-12.188v-1.969h12.188l-5.578-5.625z'
  },
  arrowUpward: {
    name: 'arrow-upward',
    path: 'M3.984 12l8.016-8.016 8.016 8.016-1.453 1.406-5.578-5.578v12.188h-1.969v-12.188l-5.625 5.578z'
  },
  check: {
    name: 'check',
    path: 'M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z'
  },
  cross: {
    name: 'cross',
    path: 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z'
  },
  arrowKeyboardDown: {
    name: 'arrow-keyboard-down',
    path: 'M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'
  },
  arrowKeyboardLeft: {
    name: 'arrow-keyboard-left',
    path: 'M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z'
  },
  arrowKeyboardRight: {
    name: 'arrow-keyboard-right',
    path: 'M8.578 16.359l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z'
  },
  arrowKeyboardUp: {
    name: 'arrow-keyboard-up',
    path: 'M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'
  },
  edit: {
    name: 'edit',
    path: 'M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828c0.375-0.375 1.031-0.375 1.406 0l2.344 2.344c0.375 0.375 0.375 1.031 0 1.406zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z'
  },
  moreHorizontal: {
    name: 'more-horizontal',
    path: 'M12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM18 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM6 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016z'
  },
  moreVertical: {
    name: 'more-vertical',
    path: 'M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016 2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z'
  },
  redo: {
    name: 'redo',
    path: 'M18.422 10.594l3.563-3.609v9h-9l3.656-3.609q-2.25-1.875-5.156-1.875-2.391 0-4.617 1.594t-2.977 3.891l-2.344-0.75q1.031-3.188 3.773-5.203t6.164-2.016q3.984 0 6.938 2.578z'
  },
  refresh: {
    name: 'refresh',
    path: 'M17.672 6.328l2.344-2.344v7.031h-7.031l3.234-3.234c-1.078-1.078-2.578-1.781-4.219-1.781-3.328 0-6 2.672-6 6s2.672 6 6 6c2.625 0 4.875-1.641 5.672-3.984h2.063c-0.891 3.469-3.984 6-7.734 6-4.406 0-7.969-3.609-7.969-8.016s3.563-8.016 7.969-8.016c2.203 0 4.219 0.891 5.672 2.344z'
  },
  remove: {
    name: 'remove',
    path: 'M18.984 12.984h-13.969v-1.969h13.969v1.969z'
  },
  reorder: {
    name: 'reorder',
    path: 'M3 5.016h18v1.969h-18v-1.969zM3 11.016v-2.016h18v2.016h-18zM3 18.984v-1.969h18v1.969h-18zM3 15v-2.016h18v2.016h-18z'
  },
  replay: {
    name: 'replay',
    path: 'M12 5.016q3.328 0 5.672 2.344t2.344 5.625q0 3.328-2.367 5.672t-5.648 2.344-5.648-2.344-2.367-5.672h2.016q0 2.484 1.758 4.242t4.242 1.758 4.242-1.758 1.758-4.242-1.758-4.242-4.242-1.758v4.031l-5.016-5.016 5.016-5.016v4.031z'
  },
  settings: {
    name: 'settings',
    path: 'M12 15.516c1.922 0 3.516-1.594 3.516-3.516s-1.594-3.516-3.516-3.516-3.516 1.594-3.516 3.516 1.594 3.516 3.516 3.516zM19.453 12.984l2.109 1.641c0.188 0.141 0.234 0.422 0.094 0.656l-2.016 3.469c-0.141 0.234-0.375 0.281-0.609 0.188l-2.484-0.984c-0.516 0.375-1.078 0.75-1.688 0.984l-0.375 2.625c-0.047 0.234-0.234 0.422-0.469 0.422h-4.031c-0.234 0-0.422-0.188-0.469-0.422l-0.375-2.625c-0.609-0.234-1.172-0.563-1.688-0.984l-2.484 0.984c-0.234 0.094-0.469 0.047-0.609-0.188l-2.016-3.469c-0.141-0.234-0.094-0.516 0.094-0.656l2.109-1.641c-0.047-0.328-0.047-0.656-0.047-0.984s0-0.656 0.047-0.984l-2.109-1.641c-0.188-0.141-0.234-0.422-0.094-0.656l2.016-3.469c0.141-0.234 0.375-0.281 0.609-0.188l2.484 0.984c0.516-0.375 1.078-0.75 1.688-0.984l0.375-2.625c0.047-0.234 0.234-0.422 0.469-0.422h4.031c0.234 0 0.422 0.188 0.469 0.422l0.375 2.625c0.609 0.234 1.172 0.563 1.688 0.984l2.484-0.984c0.234-0.094 0.469-0.047 0.609 0.188l2.016 3.469c0.141 0.234 0.094 0.516-0.094 0.656l-2.109 1.641c0.047 0.328 0.047 0.656 0.047 0.984s0 0.656-0.047 0.984z'
  },
  undo: {
    name: 'undo',
    path: 'M12.516 8.016q3.422 0 6.141 2.016t3.797 5.203l-2.344 0.75q-0.797-2.438-2.883-3.961t-4.711-1.523q-2.906 0-5.156 1.875l3.656 3.609h-9v-9l3.563 3.609q2.953-2.578 6.938-2.578z'
  },
  unfoldLess: {
    name: 'unfold-less',
    path: 'M16.594 5.391l-4.594 4.594-4.594-4.594 1.406-1.406 3.188 3.188 3.188-3.188zM7.406 18.609l4.594-4.594 4.594 4.594-1.406 1.406-3.188-3.188-3.188 3.188z'
  },
  unfoldMore: {
    name: 'unfold-more',
    path: 'M12 18.188l3.188-3.188 1.406 1.406-4.594 4.594-4.594-4.594 1.406-1.406zM12 5.813l-3.188 3.188-1.406-1.406 4.594-4.594 4.594 4.594-1.406 1.406z'
  },
  coffee: {
    name: 'coffee',
    path: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z'
  },
  drag: {
    name: 'drag',
    path: 'M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
  },
  bookmark: {
    name: 'bookmark',
    path: 'M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z'
  },
  addBookmark: {
    name: 'add-bookmark',
    path: 'M17 11v6.97l-5-2.14l-5 2.14V5h6V3H7C5.9 3 5 3.9 5 5v16l7-3l7 3V11H17z M21 7h-2v2h-2V7h-2V5h2V3h2v2h2V7z'
  },
  group: {
    name: 'group',
    path: 'M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'
  },
  addGroup: {
    name: 'add-group',
    path: 'M19 19H5V5H14V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H19V19Z M19 5V3H17V5H15V7H17V9H19V7H21V5H19Z'
  },
  info: {
    name: 'info',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'
  },
  warning: {
    name: 'warning',
    path: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
  }
};

icon.render = (name) => {
  const iconElement = node('span|class:icon');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', '1.1');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '24');
  svg.setAttribute('fill', 'currentColor');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', icon.all[name].path);

  svg.appendChild(path);
  iconElement.appendChild(svg);

  return iconElement;
};

export { icon };
