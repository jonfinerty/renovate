import { DartVersionDatasource } from '../../datasource/dart-version';
import { DockerDatasource } from '../../datasource/docker';
import { FlutterVersionDatasource } from '../../datasource/flutter-version';
import { GithubReleasesDatasource } from '../../datasource/github-releases';
import { GithubTagsDatasource } from '../../datasource/github-tags';
import { HexpmBobDatasource } from '../../datasource/hexpm-bob';
import { JavaVersionDatasource } from '../../datasource/java-version';
import { NodeVersionDatasource } from '../../datasource/node-version';
import { NpmDatasource } from '../../datasource/npm';
import { RubyVersionDatasource } from '../../datasource/ruby-version';

export { extractPackageFile } from './extract';

export const displayName = 'asdf';

export const defaultConfig = {
  fileMatch: ['(^|/)\\.tool-versions$'],
};

export const supportedDatasources = [
  JavaVersionDatasource.id,
  DockerDatasource.id,
  GithubReleasesDatasource.id,
  GithubTagsDatasource.id,
  HexpmBobDatasource.id,
  NodeVersionDatasource.id,
  NpmDatasource.id,
  RubyVersionDatasource.id,
  DartVersionDatasource.id,
  FlutterVersionDatasource.id,
];
