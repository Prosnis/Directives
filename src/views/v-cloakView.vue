<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
 <template>
    <div v-cloak>
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const message = ref('Данные загружены!');
</scriрt>

<style scoped>
    [v-cloak] {
    display: none; /* Скрываем элементы с директивой v-cloak до того, как Vue завершит рендеринг */
    }
</style>
    
  `

const exampleCodeJs = `
   <style>
       /* Скрываем элементы с атрибутом data-cloak */
       [data-cloak] {
        display: none;
    }
  </style>

  <div data-cloak>
    <p id="message">{{ message }}</p>
  </div>

  <script>
    // После загрузки страницы показываем элемент, удалив атрибут data-cloak
    window.addEventListener('DOMContentLoaded', function() {
      const message = 'Данные загружены!'; // Пример данных
      document.getElementById('message').textContent = message;
      
      // Убираем атрибут data-cloak для отображения контента
      document.querySelector('[data-cloak]').removeAttribute('data-cloak');
    });
  </scriрt>
  `

</script>


<template>
    <main>
        <h1>V-CLOAK</h1>
        <p>v-cloak используется для скрытия содержимого, пока Vue не завершит его компиляцию. Это позволяет избежать
            отображения некомпилированных шаблонов (например, {{ message }}) до того, как Vue закончит рендеринг. Обычно
            используется для предотвращения "мигания" неинтерполированных данных в процессе загрузки приложения.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>v-cloak не принимает никаких значений или выражений. Это просто флаг.</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>У директивы v-cloak нет сокращенной записи.</li>
        </ul>
        <h2>Пример на Vue 3 (Composition API)</h2>
        <CodeBlock :code="exampleCode" language="javascript" />
        <ul>
            <li>Пока Vue не завершит рендеринг, элемент с v-cloak будет скрыт (через CSS свойство display: none).</li>
            <li>После завершения рендеринга Vue удаляет атрибут v-cloak, и содержимое становится видимым.</li>
        </ul>
        <h2>Пример с модификаторами</h2>
        <h2>Пример на нативном <span>JavaScript</span></h2>
        <CodeBlock :code="exampleCodeJs" language="javascript" />
    </main>
</template>


<style>
h1,
h2 {
    color: #42d392
}

main {
    color: white;
    font-size: 20px;
}

span {
    color: yellow
}
</style>
