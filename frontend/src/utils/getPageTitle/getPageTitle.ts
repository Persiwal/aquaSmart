const pageTitles: { [key: string]: string } = {
  '/modules': 'Modules',
  '/modules/:id': 'Module Details',
}

const getPageTitle = (path: string) => {
  if (pageTitles[path]) {
    return pageTitles[path]
  }

  const dynamicRouteKey = Object.keys(pageTitles).find(
    (route) => route.includes(':') && path.startsWith(route.split(':')[0])
  )

  if (dynamicRouteKey) {
    return pageTitles[dynamicRouteKey]
  }

  return 'Page'
}

export default getPageTitle
