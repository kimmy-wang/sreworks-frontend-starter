import gulp from 'gulp'
import { runCmd } from '../utils/runCmd'

const buildUmd = () => (done) => {
  runCmd('webpack', ['-c', 'config/webpack.config.js'], done)
}

gulp.task('umd', gulp.series(buildUmd()))

const buildEsm = () => (done) => {
  runCmd('webpack', ['-c', 'config/webpack.config.es.js'], done)
}

gulp.task('esm', gulp.series(buildEsm()))

const buildCjs = () => (done) => {
  runCmd('webpack', ['-c', 'config/webpack.config.cjs.js'], done)
}

gulp.task('cjs', gulp.series(buildCjs()))

gulp.task('build', gulp.parallel(buildUmd(), buildEsm(), buildCjs()))
