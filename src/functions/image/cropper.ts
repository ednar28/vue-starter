import Cropper from 'cropperjs'
import { nextTick, ref } from 'vue'

export const useImgCropper = () => {
  const cropper = ref<Cropper>()
  const canvasWidth = ref(0)
  const canvasHeight = ref(0)
  const scaleX = ref(1)
  const scaleY = ref(1)

  const init = async (
    el: HTMLImageElement,
    width: number,
    height: number,
    initialTransform?: { left: number, top: number },
    fitMode?: 'fill' | 'contain',
  ) => {
    canvasWidth.value = width
    canvasHeight.value = height

    return new Promise<void>((resolve) => {
      cropper.value = new Cropper(el, {
        container: el.parentElement || document.body,
      })

      const cropperImage = cropper.value.getCropperImage()
      const cropperSelection = cropper.value.getCropperSelection()

      if (cropperSelection) {
        cropperSelection.aspectRatio = width / height
        cropperSelection.movable = false
        cropperSelection.resizable = false
      }

      if (cropperImage) {
        cropperImage.rotatable = true
        cropperImage.scalable = true
        cropperImage.translatable = true
      }

      const onReady = () => {
        nextTick(() => {
          if (cropperSelection) {
            cropperSelection.width = width
            cropperSelection.height = height
            cropperSelection.x = 0
            cropperSelection.y = 0
          }

          if (initialTransform && cropperImage) {
            cropperImage.$setTransform(1, 0, 0, 1, initialTransform.left, initialTransform.top)
          } else if (fitMode === 'contain') {
            autoFitContain()
          } else if (fitMode === 'fill') {
            autoFitFill()
          }
          resolve()
        })
      }

      cropperImage?.$ready(onReady)
    })
  }

  const getCroppedCanvas = async () => {
    const selection = cropper.value?.getCropperSelection()
    return selection?.$toCanvas({
      width: canvasWidth.value,
      height: canvasHeight.value,
    })
  }

  const getCroppedSrc = async () => {
    const canvas = await getCroppedCanvas()
    return canvas?.toDataURL('image/webp', 1)
  }

  const getTransform = () => {
    return cropper.value?.getCropperImage()?.$getTransform()
  }

  const destroy = () => {
    cropper.value?.destroy()
  }

  const rotate = (degree: number) => {
    cropper.value?.getCropperImage()?.$rotate(`${degree}deg`)
  }

  const flipHorizontal = () => {
    scaleX.value *= -1
    cropper.value?.getCropperImage()?.$scale(scaleX.value, scaleY.value)
  }

  const flipVertical = () => {
    scaleY.value *= -1
    cropper.value?.getCropperImage()?.$scale(scaleX.value, scaleY.value)
  }

  const getSelectionRect = () => {
    const selection = cropper.value?.getCropperSelection()
    if (!selection) return { x: 0, y: 0, width: 0, height: 0 }
    return { x: selection.x, y: selection.y, width: selection.width, height: selection.height }
  }

  const setSelectionRect = (x: number, y: number, width: number, height: number) => {
    cropper.value?.getCropperSelection()?.$change(x, y, width, height)
  }

  const alignHorizontalLeft = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const transform = image.$getTransform()
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const imgRect = image.getBoundingClientRect()
    const offsetX = -imgRect.left + canvasRect.left
    image.$setTransform(transform[0], transform[1], transform[2], transform[3], offsetX + transform[4], transform[5])
  }

  const alignHorizontalCenter = () => {
    cropper.value?.getCropperImage()?.$center('contain')
  }

  const alignHorizontalRight = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const transform = image.$getTransform()
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const imgRect = image.getBoundingClientRect()
    const offsetX = canvasRect.right - imgRect.right
    image.$setTransform(transform[0], transform[1], transform[2], transform[3], transform[4] + offsetX, transform[5])
  }

  const alignVerticalTop = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const transform = image.$getTransform()
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const imgRect = image.getBoundingClientRect()
    const offsetY = -imgRect.top + canvasRect.top
    image.$setTransform(transform[0], transform[1], transform[2], transform[3], transform[4], offsetY + transform[5])
  }

  const alignVerticalMiddle = () => {
    cropper.value?.getCropperImage()?.$center('contain')
  }

  const alignVerticalBottom = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const transform = image.$getTransform()
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const imgRect = image.getBoundingClientRect()
    const offsetY = canvasRect.bottom - imgRect.bottom
    image.$setTransform(transform[0], transform[1], transform[2], transform[3], transform[4], transform[5] + offsetY)
  }

  const fitToHeight = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const selection = cropper.value?.getCropperSelection()
    if (!selection) return
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const scaleY = selection.height / canvasRect.height
    image.$scale(scaleY, scaleY)
    alignVerticalTop()
  }

  const fitToWidth = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const selection = cropper.value?.getCropperSelection()
    if (!selection) return
    const canvas = cropper.value?.getCropperCanvas()
    if (!canvas) return
    const canvasRect = canvas.getBoundingClientRect()
    const scaleX = selection.width / canvasRect.width
    image.$scale(scaleX, scaleX)
    alignHorizontalLeft()
  }

  const autoFitFill = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const selection = cropper.value?.getCropperSelection()
    if (!selection) return
    const aspectRatio = canvasWidth.value / canvasHeight.value
    if (selection.width / selection.height < aspectRatio) {
      fitToWidth()
    } else {
      fitToHeight()
    }
    alignVerticalMiddle()
    alignHorizontalCenter()
  }

  const autoFitContain = () => {
    const image = cropper.value?.getCropperImage()
    if (!image) return
    const selection = cropper.value?.getCropperSelection()
    if (!selection) return
    const aspectRatio = canvasWidth.value / canvasHeight.value
    if (selection.width / selection.height > aspectRatio) {
      fitToWidth()
    } else {
      fitToHeight()
    }
    alignVerticalMiddle()
    alignHorizontalCenter()
  }

  return {
    cropper,
    init,
    getCroppedSrc,
    getCroppedCanvas,
    getTransform,
    getSelectionRect,
    setSelectionRect,
    destroy,
    rotate,
    flipHorizontal,
    flipVertical,
    alignHorizontalLeft,
    alignHorizontalCenter,
    alignHorizontalRight,
    alignVerticalTop,
    alignVerticalMiddle,
    alignVerticalBottom,
    fitToHeight,
    fitToWidth,
    autoFitFill,
    autoFitContain,
  }
}
