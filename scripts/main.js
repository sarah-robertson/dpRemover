// prettylittlething elements that relate to Scarcity category of Dark Patterns 
const classNames = [
  'percentage',
  'section-three',
  'tagg-reset',
  'countdown-text'
]

const classNamesSelector = classNames.map(x => `.${x}`).join(', ')

// Remove each node
const removeNodes = nodes => nodes.forEach(node => node.remove())

// Get DOM nodes from the class names
const getDOMNodes = () => [...document.querySelectorAll(classNamesSelector)]

// Create an observer instance linked to the callback function
const observer = new MutationObserver(() => removeNodes(getDOMNodes()))

const retry = () => setTimeout(init, 5)

const init = () => {
  if (!document.body) {
    return retry()
  }

  // Start observing the target node for configured mutations
  observer.observe(document.body, {
    attributes: false,
    childList: true,
    subtree: false
  })
}

init()
