Template.videobackground.onRendered(function () {
  renderVideo(this.firstNode.children[0], _.extend(
    {
      loop: 1,
      type: 'vimeo',
      volume: 0,
      aspectRatio: 1.785,
      autoSize: 1,
      setTimeout: 2000
    },
    this.data)
  )
})
