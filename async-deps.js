module.exports = (async () => {
  const [globbyModule, nodeFetchModule] = await Promise.all([
    import('globby'),
    import('node-fetch')
  ]);
  return {globbyModule, nodeFetchModule}
})()
