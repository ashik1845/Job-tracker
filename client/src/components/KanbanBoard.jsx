import React from "react";
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";
import API from "../services/api";
import "../styles/kanban.css";
import ApplicationCard from "./ApplicationCard";

const columns = [
  "Applied",
  "Online Assessment",
  "Interview",
  "Offer",
  "Rejected"
];

const DraggableCard = ({ app }) => {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: app._id
    });

  const style = {
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="card"
    >
      <ApplicationCard app={app} />

    </div>
  );
};

const Column = ({ id, apps }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="column">
      <div className="column-header">
        <h3>{id}</h3>
        <span className="count-badge">{apps.length}</span>
      </div>

      <div className="column-body">
        <SortableContext
          items={apps.map(app => app._id)}
          strategy={verticalListSortingStrategy}
        >
          {apps.map(app => (
            <DraggableCard key={app._id} app={app} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};


const KanbanBoard = ({ apps, fetchApps }) => {

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (!over) return;

    const app = apps.find(a => a._id === active.id);

    if (app.status !== over.id) {
      await API.put(`/applications/${app._id}`, {
        ...app,
        status: over.id
      });
      fetchApps();
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="kanban-container">
        {columns.map(col => (
          <Column
            key={col}
            id={col}
            apps={apps.filter(app => app.status === col)}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
