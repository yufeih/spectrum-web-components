import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/express/themes.js'
import '@spectrum-web-components/button/sp-button.js'
import '@spectrum-web-components/button/sp-clear-button.js'
import '@spectrum-web-components/button/sp-close-button.js'
import '@spectrum-web-components/infield-button/sp-infield-button.js'
import '@spectrum-web-components/badge/sp-badge.js'
import '@spectrum-web-components/card/sp-card.js'
import '@spectrum-web-components/combobox/sp-combobox.js'
import '@spectrum-web-components/link/sp-link.js'
import '@spectrum-web-components/number-field/sp-number-field.js'
import '@spectrum-web-components/picker/sp-picker.js'
import '@spectrum-web-components/field-group/sp-field-group.js'
import '@spectrum-web-components/field-label/sp-field-label.js'
import '@spectrum-web-components/help-text/sp-help-text.js'
import '@spectrum-web-components/textfield/sp-textfield.js'
import '@spectrum-web-components/tooltip/sp-tooltip.js'
import '@spectrum-web-components/action-button/sp-action-button.js'
import '@spectrum-web-components/table/elements.js'
import '@spectrum-web-components/search/sp-search.js'
import '@spectrum-web-components/sidenav/sp-sidenav.js'
import '@spectrum-web-components/sidenav/sp-sidenav-heading.js'
import '@spectrum-web-components/sidenav/sp-sidenav-item.js'
import '@spectrum-web-components/field-label/sp-field-label.js'
import '@spectrum-web-components/radio/sp-radio.js'
import '@spectrum-web-components/radio/sp-radio-group.js'
import '@spectrum-web-components/divider/sp-divider.js'
import '@spectrum-web-components/tabs/sp-tabs.js'
import '@spectrum-web-components/tabs/sp-tab.js'
import '@spectrum-web-components/tabs/sp-tab-panel.js'
import '@spectrum-web-components/alert-dialog/sp-alert-dialog.js'
import '@spectrum-web-components/overlay/sp-overlay.js'
import '@spectrum-web-components/overlay/overlay-trigger.js'
import '@spectrum-web-components/popover/sp-popover.js'
import '@spectrum-web-components/dialog/sp-dialog.js'
import '@spectrum-web-components/dialog/sp-dialog-base.js'
import '@spectrum-web-components/dialog/sp-dialog-wrapper.js'
import '@spectrum-web-components/action-group/sp-action-group.js'
import '@spectrum-web-components/avatar/sp-avatar.js'
import '@spectrum-web-components/truncated/sp-truncated.js'
import '@spectrum-web-components/switch/sp-switch.js'
import '@spectrum-web-components/status-light/sp-status-light.js'
import '@spectrum-web-components/underlay/sp-underlay.js'
import '@spectrum-web-components/alert-banner/sp-alert-banner.js'
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import '@spectrum-web-components/contextual-help/sp-contextual-help.js';
import '@spectrum-web-components/field-group/sp-field-group.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/picker/sp-picker.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';

import '@spectrum-web-components/icons-workflow/icons/sp-icon-add.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert-circle.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert-circle-filled.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-anchor.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-pending.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-draft.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-clock.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-info.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-engagement.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-delete.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-settings.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-cancel.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-chevron-double-right.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-edit.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-more.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-import.js'
import '@spectrum-web-components/icons-workflow/icons/sp-icon-export.js'

import { Theme } from '@spectrum-web-components/bundle'
import { CSSResult } from 'lit'

patchTheme()

export * from './local-time'

function patchTheme() {
  for (const theme of (Theme as any).instances as Set<Theme>) {
    for (const style of (theme as any).styles as CSSResult[]) {
      // @ts-ignore
      style.cssText = style.cssText
        .replace(/--spectrum-accent-color-([0-9]*):var\(.*?\)/g, '--spectrum-accent-color-$1:var(--spectrum-cyan-$1)')
    }
  }
}

const w = window as any
w.getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone
w.downloadFile = async (type: string, filename: string, ref: any) => {
  const url = URL.createObjectURL(new Blob([await ref.arrayBuffer()], { type }))  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url)
}
