const featuresCustoms = (features) => {
  let elFeatures = ''

  features.map((feature) => {
    elFeatures += `
        <li>${feature}</li>
    `
  })
  return elFeatures
}

export default featuresCustoms
