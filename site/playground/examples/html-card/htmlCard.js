class HtmlCard extends HtmlNode {
  shouldUpdate() {
    const { properties } = this.getAttributes();
    if (this.currrentProperties && this.currrentProperties === JSON.stringify(properties)) return false;
    this.currrentProperties = JSON.stringify(properties)
    return true;
  }
  // 重写HtmlNode的setHtml，来控制html节点内容。
  setHtml(rootEl) {
    // todo: 和react不一样，还没有找到合适的利用vue内置的diff算法来计算节点是否需要更新。
    if (!this.shouldUpdate()) return;
    // const { properties } = this.getAttributes();
    const cardEl = this.getCardEl();
    rootEl.innerHtml = '';
    rootEl.appendChild(cardEl);
  }
  getCardEl() {
    const { properties } = this.getAttributes();
    const el = document.createElement('div');
    el.className = 'html-card';

    const header = document.createElement('div');
    header.className = 'html-card-header';
    header.innerText = properties.title;

    const body = document.createElement('div');
    body.className = 'html-card-body';
    body.innerText = properties.content;

    const footer = document.createElement('div');
    footer.className = 'html-card-footer';

    if (properties.answers) {
      properties.answers.map((answer) => {
        const label = document.createElement('div');
        label.innerText = answer.text;
        label.className = 'html-card-label';
        footer.appendChild(label);
      });
    }

    el.appendChild(header);
    el.appendChild(body);
    el.appendChild(footer);

    return el;
  }
}

class HtmlCardModel extends HtmlNodeModel {
  setAttributes() {
    this.width = 240;
    this.height = 100;
    const { properties } = this;
    if (properties.answers) {
      let preOffset = 5;
      const sourceAnchor = properties.answers.map((answer) => {
        const text = answer.text;
        const x = -120 + preOffset + (12 * text.length / 2) + 2;
        preOffset += 12 * text.length + 10 + 4; 
        return [ x, 45]
      });
      this.anchorsOffset = [[0, -50]].concat(sourceAnchor);
    }
  }
}

export default {
  type: 'html-card',
  view: HtmlCard,
  model: HtmlCardModel,
}