import PropTypes from "prop-types";
import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_DISTANCE = 28;

function getOffset(direction, distance) {
  switch (direction) {
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "down":
      return { x: 0, y: -distance };
    default:
      return { x: 0, y: distance };
  }
}

function buildVariants({ direction, distance, duration, delay, variant }) {
  const offset = getOffset(direction, distance);

  const base = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
  };

  if (variant === "tilt") {
    return {
      hidden: { ...base, scale: 0.97, rotateX: 6, rotateZ: -1 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateZ: 0,
        transition: { duration, ease: "easeOut", delay },
      },
    };
  }

  if (variant === "glide") {
    return {
      hidden: { ...base, scale: 0.985 },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration, ease: "easeOut", delay },
      },
    };
  }

  return {
    hidden: { ...base, scale: 0.98 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, ease: "easeOut", delay },
    },
  };
}

export function RevealItem({
  as = "div",
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = DEFAULT_DISTANCE,
  variant = "soft",
  children,
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={buildVariants({ direction, distance, duration, delay, variant })}
    >
      {children}
    </MotionTag>
  );
}

RevealItem.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  distance: PropTypes.number,
  variant: PropTypes.oneOf(["soft", "glide", "tilt"]),
  children: PropTypes.node.isRequired,
};

export function RevealGroup({
  as = "div",
  className = "",
  delay = 0,
  stagger = 0.08,
  children,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 1 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

RevealGroup.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default function Reveal({
  as = "div",
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = DEFAULT_DISTANCE,
  variant = "soft",
  children,
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  const variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
      }
    : buildVariants({ direction, distance, duration, delay, variant });

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}

Reveal.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  distance: PropTypes.number,
  variant: PropTypes.oneOf(["soft", "glide", "tilt"]),
  children: PropTypes.node.isRequired,
};
