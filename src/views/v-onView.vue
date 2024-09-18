<script setup>
import CodeBlock from '../components/CodeBlock.vue';

const exampleCode = `
    <template>
        <div>
            <button @click="handleClick">Click me!</button>
        </div>
        <p>{{count}}</p>
    </template>

    <script setup>
        import { ref } from 'vue';

        const count = ref(0);

        function handleClick() {
        count.value++;
        console.log('Button clicked', count.value);
        }
    </scriрt>
    
  `

const exampleCodeJs = `
    <button id="myButton">Click me!</button>

    <script>
        let count = 0;
        const button = document.getElementById('myButton');
        
        button.addEventListener('click', function() {
        count++;
        console.log('Button clicked', count);
        });
  </scriрt>
  `
const exampleCodeMod = `
    <button @click.stop="handleClick">Click with stopPropagation</button>
    <form @submit.prevent="handleSubmit">Submit with preventDefault</form>
  `
  import { ref } from 'vue';

const count = ref(0);

function handleClick() {
count.value++;
console.log('Button clicked', count.value);
}


</script>


<template>
    <main>
        <h1>V-ON</h1>
        <p>Директива v-on в Vue используется для привязки событий к элементам. Она позволяет обрабатывать события, такие
            как нажатия кнопок, ввод текста, и другие взаимодействия пользователя.</p>
        <h2>Тип данных:</h2>
        <ul>
            <li>Функции или выражения, которые будут вызваны при срабатывании события.</li>
        </ul>
        <h2>Сокращенная запись</h2>
        <ul>
            <li>Да, v-on можно сократить до @</li>
        </ul>
        <h2>Модификаторы</h2>
        <ul>
            <li>.stop — вызывает event.stopPropagation().</li>
            <li>.prevent — вызывает event.preventDefault().</li>
            <li>.capture — отслеживает событие в режиме capture.</li>
            <li>.self — вызывает обработчик только если событие произошло именно на этом элементе.</li>
            <li>.{keyAlias} — вызывает обработчик только при нажатии определённой клавиши.</li>
            <li>.once — вызывает обработчик события только один раз.</li>
            <li>.left — вызывает обработчик только по нажатию левой кнопки мыши.</li>
            <li>.right — вызывает обработчик только по нажатию правой кнопки мыши.</li>
            <li>.left — вызывает обработчик только по нажатию левой кнопки мыши.</li>
            <li>.middle — вызывает обработчик только по нажатию средней кнопки мыши.</li>
            <li>.passive — добавляет обработчик события DOM с опцией { passive: true }.</li>
        </ul>

        <h2>Пример на Vue 3 (Composition API)</h2>
        <div>
            <button @click="handleClick">Click me!</button>
        </div>
        <p>{{count}}</p>
        <CodeBlock :code="exampleCode" language="javascript" />
        <h2>Пример с модификаторами</h2>
        <CodeBlock :code="exampleCodeMod" language="javascript" />
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
