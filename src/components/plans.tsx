// Copyright 2023 Josilyn McGuinness
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

import { addDays } from 'date-fns';
import React, { useState } from "react";
import { Plan, PlanContextType, PlansData } from "../model/plan";
import PlanContext from "../context/planContext";

const today = new Date();
export const Plans = ({ children }: { children: React.ReactNode }) => {

  const [plans, setPlans] = useState<Array<Plan>>(PlansData);
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(addDays(today, 7));

  const value: PlanContextType = {
    setStartDate: function (d: Date): void {
      setStartDate(d)
    },
    setEndDate: function (d: Date): void {
      setEndDate(d)
    },
    getStartDate: function (): Date{
      return startDate
    },
    getEndDate: function (): Date {
      return endDate
    },
    selectTime(time: Date, plan: Plan): Date {
        const t = plan.startDate
        const hours = time.getHours()
        const minutes = time.getMinutes()
        t.setHours(hours)
        t.setMinutes(minutes)
      return t
    },
    selectDate(date: Date, plan: Plan): Date {
      const d = plan.startDate
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      d.setFullYear(year)
      d.setMonth(month)
      d.setDate(day)
      return d;
    },
    read(): Plan[] {
      return plans.filter(e => e.startDate >= startDate && e.endDate<= endDate);
    },
    create(plan: Plan): void {
      setPlans([...plans, plan]);
    },
    delete(plan: Plan): void {
      setPlans([...plans.filter(p => p.id != plan.id)]);
    },
    update(plan: Plan): void {
      const filteredPlans = plans.filter(p => p.id != plan.id)
      filteredPlans.push(plan)
      setPlans(filteredPlans)
    },
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};
