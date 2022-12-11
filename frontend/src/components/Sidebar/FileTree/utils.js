
export function getTree(elements) {

  let elements_obj = {}

  Object.entries(elements).forEach(([id, element]) => {
    elements_obj[id] = {
      id,
      ...element
    }
  })

  let tree = {}

  function generateTree(id) {
    if(tree[id]) {
      let obj = tree[id]
      delete tree[id]
      return obj
    }

    if(elements_obj[id].children) {
      tree[id] = {
        ...elements_obj[id],
        children: elements_obj[id].children.map(childId => generateTree(childId))
      }
    }
    else tree[id] = elements_obj[id]

    console.log(id, 'values:', tree[id])

    if(tree[id].children) tree[id].children.sort((a, b)=> (a.type < b.type ? 1 : -1))

    return tree[id]
  }

  Object.keys(elements_obj).forEach((id) => {
    generateTree(id)
  })

  console.log('generated tree = ', JSON.stringify(Object.values(tree)))

  return Object.values(tree)
}

