// Function to format the current path into a breadcrumb structure
const formatPath = (path: string) => {
  const pathSegments = path.split('/').filter(Boolean)
  const breadcrumbSegments = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join('/')}`
    return { label: capitalize(segment), url }
  })
  return [...breadcrumbSegments]
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default formatPath
