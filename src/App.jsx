import React, { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';

const App = () => {
  const [menuActive, setMenuactive] = useState(false)
  const items = [{ value: "Главная", href: '/main', icon: 'home' }, { value: "Магазин", href: '/shop', icon: "shopping_cart" }, { value: "История", href: '/history', icon: "history" }, { value: "Поддержка", href: '/support', icon: 'help' }]
  return (
    <div className="App">
      <nav>
        <div className='burger-btn' onClick={() => setMenuactive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta consequuntur veniam corporis consequatur autem modi animi labore porro nesciunt id voluptatum, obcaecati, cupiditate facere quia laudantium minus impedit blanditiis distinctio.
          Reiciendis incidunt, amet natus veniam repellat repudiandae ab voluptate animi a, iusto eius quos soluta eveniet vel fugiat ullam rem eligendi placeat illo tenetur voluptas cumque totam officiis. Itaque, dolore!
          Omnis praesentium asperiores unde nesciunt totam, a eos tempore fugiat animi dolorum esse ut dolor cupiditate quidem! Libero, quidem tempora nulla suscipit earum voluptatum, pariatur at doloribus saepe, quo consequatur?
          Officia excepturi optio animi debitis impedit consequatur veritatis odit eum ipsum, vero voluptate ea iure adipisci similique totam nam repellat nobis doloribus amet? Distinctio, soluta odit fuga cumque voluptates voluptas!
          Aut eum necessitatibus voluptates rerum. Iusto eos expedita ipsa nulla cum vitae maiores amet et tenetur. Perferendis accusantium quas nisi architecto illo. Corporis, mollitia consequatur laborum nihil vero dolorum illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta consequuntur veniam corporis consequatur autem modi animi labore porro nesciunt id voluptatum, obcaecati, cupiditate facere quia laudantium minus impedit blanditiis distinctio.
          Reiciendis incidunt, amet natus veniam repellat repudiandae ab voluptate animi a, iusto eius quos soluta eveniet vel fugiat ullam rem eligendi placeat illo tenetur voluptas cumque totam officiis. Itaque, dolore!
          Omnis praesentium asperiores unde nesciunt totam, a eos tempore fugiat animi dolorum esse ut dolor cupiditate quidem! Libero, quidem tempora nulla suscipit earum voluptatum, pariatur at doloribus saepe, quo consequatur?
          Officia excepturi optio animi debitis impedit consequatur veritatis odit eum ipsum, vero voluptate ea iure adipisci similique totam nam repellat nobis doloribus amet? Distinctio, soluta odit fuga cumque voluptates voluptas!
          Aut eum necessitatibus voluptates rerum. Iusto eos expedita ipsa nulla cum vitae maiores amet et tenetur. Perferendis accusantium quas nisi architecto illo. Corporis, mollitia consequatur laborum nihil vero dolorum illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta consequuntur veniam corporis consequatur autem modi animi labore porro nesciunt id voluptatum, obcaecati, cupiditate facere quia laudantium minus impedit blanditiis distinctio.
          Reiciendis incidunt, amet natus veniam repellat repudiandae ab voluptate animi a, iusto eius quos soluta eveniet vel fugiat ullam rem eligendi placeat illo tenetur voluptas cumque totam officiis. Itaque, dolore!
          Omnis praesentium asperiores unde nesciunt totam, a eos tempore fugiat animi dolorum esse ut dolor cupiditate quidem! Libero, quidem tempora nulla suscipit earum voluptatum, pariatur at doloribus saepe, quo consequatur?
          Officia excepturi optio animi debitis impedit consequatur veritatis odit eum ipsum, vero voluptate ea iure adipisci similique totam nam repellat nobis doloribus amet? Distinctio, soluta odit fuga cumque voluptates voluptas!
          Aut eum necessitatibus voluptates rerum. Iusto eos expedita ipsa nulla cum vitae maiores amet et tenetur. Perferendis accusantium quas nisi architecto illo. Corporis, mollitia consequatur laborum nihil vero dolorum illum?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta consequuntur veniam corporis consequatur autem modi animi labore porro nesciunt id voluptatum, obcaecati, cupiditate facere quia laudantium minus impedit blanditiis distinctio.
          Reiciendis incidunt, amet natus veniam repellat repudiandae ab voluptate animi a, iusto eius quos soluta eveniet vel fugiat ullam rem eligendi placeat illo tenetur voluptas cumque totam officiis. Itaque, dolore!
          Omnis praesentium asperiores unde nesciunt totam, a eos tempore fugiat animi dolorum esse ut dolor cupiditate quidem! Libero, quidem tempora nulla suscipit earum voluptatum, pariatur at doloribus saepe, quo consequatur?
          Officia excepturi optio animi debitis impedit consequatur veritatis odit eum ipsum, vero voluptate ea iure adipisci similique totam nam repellat nobis doloribus amet? Distinctio, soluta odit fuga cumque voluptates voluptas!
          Aut eum necessitatibus voluptates rerum. Iusto eos expedita ipsa nulla cum vitae maiores amet et tenetur. Perferendis accusantium quas nisi architecto illo. Corporis, mollitia consequatur laborum nihil vero dolorum illum?</p>
      </main>
      <Menu active={menuActive} setActive={setMenuactive} header={"Меню"} items={items} />
    </div>
  );
}

export default App;
