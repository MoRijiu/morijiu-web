import router from '../router/index'

const toLink = (link) => {
  router.push(link);
}

export {
  toLink,
}