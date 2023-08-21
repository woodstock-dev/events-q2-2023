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


import PlanListItem from "./planListItem";
import PlansFilter from "./plansFilter";
import { Paper, Typography } from "@mui/material";
import "./planList.css";
import usePlans from "../hooks/planHook";
import { useEffect, useState } from "react";
import { Plan } from "../model/plan";

const PlanList = () => {
  const planManager = usePlans()
  const[plans, setPlans] = useState<Plan[]>([])
  
  useEffect(() => {
    setPlans(planManager.read())
  }, [planManager])

  return (
    <Paper className="event-list" elevation={3}>
      <PlansFilter />
      <br />
      <br />
      {plans.length == 0 ? <Typography variant="h6" align="center" sx={{ mb: 2}}>
        You Have No Scheduled Plans.<br/>Make Some Plans!
      </Typography> : <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Scheduled Plans:
      </Typography>}
      {plans.length == 0 ? null : plans.map((d) => (
        <PlanListItem key={d['id']} plan={d} />
      ))}
    </Paper>
  );
};

export default PlanList;
