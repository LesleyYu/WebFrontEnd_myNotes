// 富文本编辑器
// 创建编辑器函数，创建工具栏函数
const wangEditor = require('@wangeditor/editor')
const { createEditor, createToolbar } = wangEditor

// 编辑器配置对象
const editorConfig = {
  // 占位提示文字
  placeholder: '发布文章内容...',
  // 编辑器变化时回调函数
  onChange(editor) {
    // 获取富文本内容
    const html = editor.getHtml()
    // 也可以同步到 <textarea>
    // 为了后续快速收集整个表单内容做铺垫
    document.querySelector('.publish-content').value = html
  }
}

// 创建编辑器
const editor = createEditor({
  // 创建位置
  selector: '#editor-container',
  // 默认内容
  html: '<p><br></p>',
  // 配置项
  config: editorConfig,
  // 配置集成模式（default 全部）（simple 简洁）
  mode: 'default', // or 'simple'
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
  // 为指定编辑器创建工具栏
  editor,
  // 工具栏创建的位置
  selector: '#toolbar-container',
  // 工具栏配置对象
  config: toolbarConfig,
  // 配置集成模式
  mode: 'default', // or 'simple'
})

export default editor