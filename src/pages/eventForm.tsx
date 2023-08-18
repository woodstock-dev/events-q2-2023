// Copyright 2023 Cody Black
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { useForm } from "react-hook-form";

const EventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(data);

  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <section>
          <label>Enter username</label>
          <input
            type='text'
            placeholder='username'
            {...register("username", { required: true })}
          />
          {errors.username && <span>Username is required</span>}
        </section>
        {/* Age */}
        <section>
          <label>Enter age</label>
          <input
            type='number'
            placeholder='age'
            {...register("age", { required: true })}
          />
          {errors.age && <span>Age is required</span>}
        </section>
        {/* Submit button */}
        <section>
          <input type='submit' />
        </section>
      </form>
    
      
    </React.Fragment>
  )
}

export default EventForm;