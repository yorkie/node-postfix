
function postfix(addr) {
  if (addr) {
    throw new Error('addr required');
  }
  var list = addr.split('@');
  if (list.length != 2) {
    return false;
  } else {
    return list[1];
  }
}

module.exports = postfix;