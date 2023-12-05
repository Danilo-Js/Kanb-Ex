<template>
  <div class="modal-mask" v-show="show">
    <div class="modal-wrapper">
      <div class="modal-container">
        <slot name="header">
          <!-- Conteúdo padrão do cabeçalho do modal -->
          <h3>Modal Header</h3>
        </slot>
        <div class="modal-body">
          <slot name="body">
            <!-- Conteúdo padrão do corpo do modal -->
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <!-- Conteúdo padrão do rodapé do modal -->
            <!-- Botão usando o componente UIButton -->
            <ui-button type="primary" @click="$emit('close')">Fechar</ui-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIButton from "./Button.vue";

export default {
  name: "UIModal",
  components: {
    "ui-button": UIButton, // certifique-se de que o nome do componente corresponde ao usado no template
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<!-- estilos omitidos para brevidade -->
