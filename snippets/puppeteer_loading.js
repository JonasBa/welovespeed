describe('Performance', () => {
  it('Couch page', async() => {
    await page.goto('http://localhost:4000/couch_page');

    const perfData = await page.evaluate(() => {
      const perfData = window.performance.timing; 
      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
      return { loadTime, connectTime }
    })
    expect(perfData.loadTime).toBeLessThan(3000)
  })
})