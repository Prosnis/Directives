<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <input v-model="message" placeholder="Type something..." />
            <p>Message: {{ message }}</p>
        </div>
        </template>

        <script setup>
        import { ref } from 'vue';

        const message = ref('');
    </scriрt>
  `
const exampleCodeBox = `
<template>
  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      Check me
    </label>
    <p>Checked: {{ isChecked }}</p>
  </div>
</temрlate>

<scriрt setup>
    import { ref } from 'vue';

    const isChecked = ref(false);
</scriрt>
`

const exampleCodeJs = `
    <input id="textInput" type="text" placeholder="Type something..." />
    <p>Input value: <span id="textValue"></span></p>

    <script>
        // Получаем элементы из DOM
        const textInput = document.getElementById('textInput');
        const textValue = document.getElementById('textValue');

        // Функция обновления значения
        function updateValue() {
        textValue.textContent = textInput.value;
        }

        // Устанавливаем обработчик события для обновления значения
        textInput.addEventListener('input', updateValue);

        // Изначально обновляем значение
        updateValue();
     </scriрt>
  `

import { ref } from 'vue';

const message = ref('');
const isChecked = ref(false);


</script>


<template>
    <main>
        <h1>V-MODEL</h1>
        <p>Директива v-model в Vue используется для двусторонней привязки данных между элементом формы и состоянием
            компонента. Она позволяет синхронизировать данные между полем ввода и переменной в компоненте, обновляя
            значения автоматически при изменении данных или взаимодействии пользователя.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Варьируется в зависимости от элемента формы или работы компонента</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>Нет.</li>
        </ul>
        <h2>Модификаторы</h2>
        <ul>
            <li>.lazy — отслеживание события change вместо input</li>
            <li>.number — приведение корректной строки со значением к числу</li>
            <li>.trim — удаление пробелов в начале и в конце строки</li>
        </ul>

        <h2>Пример на Vue 3 (Composition API)</h2>
        <input v-model="message" placeholder="Type something..." />
        <p>Message: {{ message }}</p>
        <CodeBlock :code="exampleCode" language="javascript" />
        <div>
            <label>
                <input type="checkbox" v-model="isChecked" />
                Check me
            </label>
            <p>Checked: {{ isChecked }}</p>
        </div>
        <CodeBlock :code="exampleCodeBox" language="javascript" />
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
